package equadra.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import equadra.model.User;
import equadra.service.GenericCrudService;
import equadra.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController extends GenericCrudController<User, String> {

    @Autowired
    UserService userService;

    @Override
    protected GenericCrudService<User, String> getService() {
        return userService;
    }
}