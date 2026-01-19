package fun.app.chapp.models;

public record OutgoingMessage(
        String message,
        String username,
        String time
) {
}
