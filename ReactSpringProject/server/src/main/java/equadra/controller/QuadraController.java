package equadra.controller;

import equadra.model.Quadra;
import equadra.service.GenericCrudService;
import equadra.service.QuadraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/quadra")
public class QuadraController extends GenericCrudController<Quadra, String> {

    @Autowired
    QuadraService quadraService;

    @Override
    protected GenericCrudService<Quadra, String> getService() {
        return quadraService;
    }
}