package equadra.security;

import org.springframework.beans.factory.annotation.Autowired;
import equadra.model.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import equadra.repository.UserRepository;

import java.util.Objects;

@Service
public class AuthUserService {

    @Autowired
    private UserRepository userRepository;
    BCryptPasswordEncoder bCryptPasswordEncoder;

    public User loadUserByUsername(String username, String password) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException(username);
        }else{
            bCryptPasswordEncoder = new BCryptPasswordEncoder();
            if(bCryptPasswordEncoder.matches(password, user.getPassword())){
                return user;
            }
        }
        throw new UsernameNotFoundException(username);
    }
}