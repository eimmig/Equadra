package springserver.annotation;

import springserver.validator.UniqueDisplaynameValidator;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Constraint(validatedBy = UniqueDisplaynameValidator.class)
@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
public @interface UniqueDisplayname {
    String message() default "{user.constraints.UniqueDisplayname.message}";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
