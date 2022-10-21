package springserver.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import springserver.model.Conta;
import springserver.model.enumerators.ContaTipo;
import springserver.repository.ContaRepository;
import springserver.service.ContaService;
import springserver.service.GenericCrudService;
import springserver.service.MovimentoService;
import springserver.service.UserService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("conta")
public class ContaController extends GenericCrudController<Conta, Long> {

    @Autowired
    ContaService contaService;

    @Autowired
    UserService userService;

    @Override
    protected GenericCrudService<Conta, Long> getService() {
        return contaService;
    }

    @Override
    public Conta save(@RequestBody @Valid Conta entity) {
        entity.setUser(userService.getCurrentUser());
        return super.save(entity);
    }
}
