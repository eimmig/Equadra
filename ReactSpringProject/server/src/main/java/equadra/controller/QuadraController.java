package equadra.controller;

import equadra.model.User;
import equadra.service.GenericCrudService;
import equadra.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/quadra")
public class QuadraController extends GenericCrudController<User, String> {

    @Autowired
    UserService userService;

    @Override
    protected GenericCrudService<User, String> getService() {
        return userService;
    }
}