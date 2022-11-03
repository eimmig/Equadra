package equadra.validator;

import equadra.annotation.UniqueUsername;
import equadra.model.User;
import equadra.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.support.Repositories;
import org.springframework.web.context.WebApplicationContext;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.Optional;

public class UniqueUsernameValidator
        implements ConstraintValidator<UniqueUsername, String> {

    @Autowired
    UserRepository userRepository;

    @Autowired
    private WebApplicationContext appContext;


    Repositories repositories = new Repositories(appContext);

    @Override
    public boolean isValid(String username, ConstraintValidatorContext constraintValidatorContext) {
        if( userRepository == null ){
             userRepository = (UserRepository) repositories.getRepositoryFor(User.class).orElse(null);
        }
        if (userRepository.findByUsername(username) == null) {
            return true;
        }
        return false;
    }


}
