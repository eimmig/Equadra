package springserver.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import springserver.model.DTO.MovimentoByContasDTO;
import springserver.model.Movimento;
import springserver.service.GenericCrudService;
import springserver.service.MovimentoService;

import java.util.List;

@RestController
@RequestMapping("movimento")
public class MovimentoController extends GenericCrudController<Movimento,Long> {

    @Autowired
    MovimentoService movimentoService;

    @Override
    protected GenericCrudService<Movimento, Long> getService() {
        return movimentoService;    
    }

    @GetMapping("/sumMovimentoByContas")
    public List<MovimentoByContasDTO> sumMovimentoByContas() {
        return movimentoService.sumMovimentoByContas();
    }


}
