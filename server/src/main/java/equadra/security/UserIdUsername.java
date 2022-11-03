
package equadra.security;

import lombok.Data;
import lombok.NoArgsConstructor;
import equadra.model.User;

@Data
@NoArgsConstructor
public class UserIdUsername {

    private Long id;
    private String username;

    public UserIdUsername(User user) {
        this.username = user.getUsername();
        this.id = user.getId();

    }
}