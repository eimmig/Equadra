package equadra.repository;

import equadra.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String>{
    User findByUsername(String username);
}

    //Select * from user where displayname LIKE '%Silva'
    //List<User> findByDisplayNameEndingWith(String displayName);
