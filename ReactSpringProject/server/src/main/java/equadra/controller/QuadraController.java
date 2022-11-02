package equadra.controller;

import equadra.model.Quadra;
import equadra.service.GenericCrudService;
import equadra.service.QuadraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/quadra")
public class QuadraController extends GenericCrudController<Quadra, Long> {

    @Autowired
    QuadraService quadraService;

    @Override
    protected GenericCrudService<Quadra, Long> getService() {
        return quadraService;
    }

    @GetMapping("/get-quadra/{id}")
    public Optional<Quadra> getQuadraInfo (@PathVariable("id") Long id) {

        return quadraService.getQuadra(id);
    }
}