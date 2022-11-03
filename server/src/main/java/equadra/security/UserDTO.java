
package equadra.security;

import lombok.Data;
import lombok.NoArgsConstructor;
import equadra.model.User;

@Data
@NoArgsConstructor
public class UserDTO {

    private String password;
    private String username;

    public UserDTO(User user) {
        this.username = user.getUsername();
        this.password = user.getPassword();

    }
}