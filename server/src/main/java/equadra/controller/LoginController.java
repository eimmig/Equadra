package equadra.controller;

import equadra.model.User;
import equadra.repository.UserRepository;
import equadra.security.UserIdUsername;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import equadra.security.AuthUserService;
import equadra.security.UserDTO;
import java.io.Serializable;


@RestController
@RequestMapping("/api/login")
public class LoginController implements Serializable {

    @Autowired
    private AuthUserService authUserService;

    @Autowired
    private UserRepository userRepository;

    @RequestMapping(value = "/valida-login", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public UserIdUsername getUserInfo (@RequestBody UserDTO usuario) {

        return new UserIdUsername(authUserService.loadUserByUsername(usuario.getUsername(), usuario.getPassword()));
    }
}