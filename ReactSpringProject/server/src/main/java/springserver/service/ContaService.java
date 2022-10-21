package springserver.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import springserver.model.Conta;
import springserver.repository.ContaRepository;

import java.util.List;

@Service
public class ContaService extends GenericCrudServiceImpl<Conta, Long> {

    @Autowired
    ContaRepository contaRepository;

    @Autowired
    UserService userService;

    @Override
    protected JpaRepository<Conta, Long> getRepository() {
        return contaRepository;
    }

    @Override
    public List<Conta> findAll() {
        return contaRepository.findAllByUser(userService.getCurrentUser());
    }

    @Override
    public List<Conta> findAll(Sort sort) {
        return contaRepository.findAllByUser(userService.getCurrentUser(),sort);
    }

    @Override
    public Page<Conta> findAll(Pageable pageable) {
        return contaRepository.findAllByUser(userService.getCurrentUser(),pageable);
    }

    @Override
    public Conta findOne(Long aLong) {
        return contaRepository.findByIdAndUser(aLong,userService.getCurrentUser());
    }
}
