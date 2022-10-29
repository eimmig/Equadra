package equadra.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import equadra.model.User;
import equadra.security.AuthUserService;
import equadra.security.UserDTO;


@RestController
@RequestMapping("/login")
public class LoginController {

    @Autowired
    private AuthUserService authUserService;
    @GetMapping("user-info")
    public UserDTO getUserInfo() {
        return new UserDTO( (User)
                authUserService.loadUserByUsername("admin"));
    }
}