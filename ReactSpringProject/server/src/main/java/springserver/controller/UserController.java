package springserver.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import springserver.model.User;
import springserver.service.GenericCrudService;
import springserver.service.UserService;

@RestController
@RequestMapping("users")
public class UserController extends GenericCrudController<User,Long> {

    @Autowired
    UserService userService;

    @Override
    protected GenericCrudService<User, Long> getService() {
        return userService;
    }
}
