package fun.app.chapp.models;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public record IncomingMessage(
        String message,
        String username
) {
    public OutgoingMessage toOutgoingMessage() {
        String time = LocalDateTime.now().format(DateTimeFormatter.ISO_TIME).substring(0,8);
        System.out.println(time);

        return new OutgoingMessage(
                message,
                username,
                time
        );
    }
}
