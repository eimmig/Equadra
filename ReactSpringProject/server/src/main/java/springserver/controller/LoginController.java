package springserver.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import springserver.model.User;
import springserver.security.AuthUserService;
import springserver.security.UserDTO;

import java.security.Principal;

@RestController
@RequestMapping("login")
public class LoginController {

    @Autowired
    private AuthUserService authUserService;

    @GetMapping("user-info")
    public UserDTO getUserInfo(Principal principal) {
        return new UserDTO( (User)
                authUserService.loadUserByUsername(principal.getName()));
    }
}