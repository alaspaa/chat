package fun.app.chapp.websocket.controller;

import fun.app.chapp.models.IncomingMessage;
import fun.app.chapp.models.OutgoingMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class TopicController {

    @MessageMapping("/main")
    @SendTo("/topic/main")
    public OutgoingMessage broadcastChat(IncomingMessage message) {
        return message.toOutgoingMessage();
    }
}
