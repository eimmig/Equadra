package springserver.repository;

import springserver.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    //Select * from user where username = ''
    // @Query(value = "Select u From User as u where u.username=:username")
    User findByUsername(String username);

    //Select * from user where displayname LIKE '%Silva'
    //List<User> findByDisplayNameEndingWith(String displayName);
}
