package org.example.proideas.Controller;

import org.example.proideas.Entity.RequirementEntity;
import org.example.proideas.Service.AIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/ai")
@CrossOrigin(origins = "http://localhost:5173/")
public class AIController {

    @Autowired
    private AIService aiService;

    @PostMapping("/generate")
    public Map<String, Object> generateProjectIdeas(@RequestBody RequirementEntity requirement) throws Exception {
        return aiService.generateProjectIdeas(requirement);
    }
}