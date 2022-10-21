package springserver.security;

import lombok.Data;
import lombok.NoArgsConstructor;
import springserver.model.User;

@Data
@NoArgsConstructor
public class UserDTO {

    private long id;
    private String displayName;
    private String username;

    public UserDTO(User user) {
        this.id = user.getId();
        this.displayName = user.getDisplayname();
        this.username = user.getUsername();
    }
}