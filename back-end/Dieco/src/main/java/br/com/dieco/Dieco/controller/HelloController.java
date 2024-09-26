package br.com.dieco.Dieco.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @GetMapping("/api/conexao")
    public String hello() {
        return "<h2>conexão ok</h2>";
    }
}