package springserver.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import springserver.model.DTO.MovimentoByContasDTO;
import springserver.model.Movimento;
import springserver.model.enumerators.MovimentoTipo;
import springserver.repository.MovimentoRepository;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class MovimentoService extends GenericCrudServiceImpl<Movimento,Long> {

    @Autowired
    MovimentoRepository movimentoRepository;

    @Autowired
    UserService userService;

    @Override
    protected JpaRepository<Movimento, Long> getRepository() {
        return movimentoRepository;
    }

    @Override
    public List<Movimento> findAll() {
        return movimentoRepository.findAllByContaUser(userService.getCurrentUser());
    }

    @Override
    public List<Movimento> findAll(Sort sort) {
        return movimentoRepository.findAllByContaUser(userService.getCurrentUser(),sort);
    }

    @Override
    public Page<Movimento> findAll(Pageable pageable) {
        return movimentoRepository.findAllByContaUser(userService.getCurrentUser(),pageable);
    }

    @Override
    public Movimento findOne(Long aLong) {
        return movimentoRepository.findByIdAndContaUser(aLong,userService.getCurrentUser());
    }
    public List<MovimentoByContasDTO> sumMovimentoByContas(){

        List<MovimentoByContasDTO> somatorioDeContas = new ArrayList<>();

        //Busca por todos usuario filtrando o logado
        List<Movimento> movimentos = movimentoRepository.findAllByContaUser(userService.getCurrentUser());

        //Variavel que salva -1 para facilitar a leitura do código
        final BigDecimal negativeOne = new BigDecimal(-1);

        //Adiciona todos os movimentos para uma lista de movimentações, fazendo a correção de valor por cada tipo
        movimentos.forEach(movimento -> {
            if(movimento.getMovimentotipo().equals(MovimentoTipo.RECEITA)){
                somatorioDeContas.add(new MovimentoByContasDTO(
                        movimento.getConta(),
                        movimento.getValor(),movimento.getValorpago()
                ));
            }else if (movimento.getMovimentotipo().equals(MovimentoTipo.DESPESA)){
                somatorioDeContas.add(new MovimentoByContasDTO(
                        movimento.getConta(),movimento.getValor().multiply(negativeOne),
                        movimento.getValorpago().multiply(negativeOne)
                ));
            } else if (movimento.getMovimentotipo().equals(MovimentoTipo.TRANSFERENCIA)){
                somatorioDeContas.add(new MovimentoByContasDTO(
                        movimento.getConta(),
                        movimento.getValor().multiply(negativeOne),
                        movimento.getValorpago().multiply(negativeOne)));
                somatorioDeContas.add(new MovimentoByContasDTO(
                        movimento.getContadestino(),
                                movimento.getValor(),
                                movimento.getValorpago()
                        ));
            }
        });

        //Após criar a lista de valores das movimentações com valor calculado, soma e agrupa por conta.
        return somatorioDeContas.stream().collect(Collectors.groupingBy(MovimentoByContasDTO::getConta))
                .entrySet().stream().map(entry -> {
            MovimentoByContasDTO movimentoByContasDTO = new MovimentoByContasDTO();

            movimentoByContasDTO.setConta(entry.getKey());

            movimentoByContasDTO.setValor(entry.getValue().stream()
                    .map(MovimentoByContasDTO::getValor)
                    .reduce(BigDecimal.ZERO,BigDecimal::add));

            movimentoByContasDTO.setValorpago(entry.getValue().stream()
                    .map(MovimentoByContasDTO::getValorpago)
                    .reduce(BigDecimal.ZERO,BigDecimal::add));

            return movimentoByContasDTO;
        }).collect(Collectors.toList());
    }

}
