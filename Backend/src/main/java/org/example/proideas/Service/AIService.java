package org.example.proideas.Service;

import org.example.proideas.Model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.example.proideas.Entity.RequirementEntity;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.List;
import java.util.Map;

@Service
public class AIService {

    @Autowired
    private RestTemplate restTemplate;

    @Value("${groq.api.key}")
    private String apiKey;

    private final String API_URL = "https://api.groq.com/openai/v1/chat/completions";

    public Map<String, Object> generateProjectIdeas(RequirementEntity requirement) throws Exception{
        String prompt = """
                You are Pro-Ideas AI, an intelligent software project recommendation assistant.
                
                Your responsibility is to recommend the best software project ideas based on the user's requirements.
                
                User Requirements:
                - Domain: %s
                - Programming Language: %s
                - Difficulty Level: %s
                - Team Size: %d members
                - Project Duration: %s
                
                Instructions:
                1. Generate exactly 5 unique software project ideas.
                2. Every project must strictly match the user's requirements.
                3. Ensure every project is different from the others.
                4. Use simple, clear, and beginner-friendly English.
                5. Avoid unnecessary technical jargon.
                6. Recommend practical projects that solve real-world problems.
                7. Do not generate duplicate or unrelated ideas.
                
                Return ONLY a valid JSON object in the following format.
                
                {
                  "projects": [
                    {
                      "projectName": "",
                      "objective": "",
                      "problemStatement": "",
                      "description": "",
                      "features": [
                        "",
                        "",
                        "",
                        ""
                      ],
                      "technologyStack": {
                        "language": "",
                        "framework": "",
                        "database": "",
                        "tools": [
                          "",
                          ""
                        ]
                      },
                      "modules": [
                        "",
                        "",
                        ""
                      ],
                      "difficulty": "",
                      "estimatedDuration": "",
                      "futureScope": "",
                      "whyChooseThisProject": "",
                      "industryApplications": [
                        "",
                        ""
                      ]
                    }
                  ],
                  "bestRecommendation": {
                    "projectName": "",
                    "reason": ""
                  }
                }
                
                Important:
                - Return ONLY JSON.
                - Do NOT include markdown.
                - Do NOT include explanations outside the JSON.
                - Ensure the JSON is valid.
                """
                .formatted(
                        requirement.getDomain(),
                        requirement.getLanguage(),
                        requirement.getDifficulty(),
                        requirement.getTeamSize(),
                        requirement.getDuration()
                );

        Message message = new Message("user", prompt);

        ChatRequest request = new ChatRequest(
                "llama-3.3-70b-versatile",
                List.of(message)
        );

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(apiKey);

        HttpEntity<ChatRequest> entity = new HttpEntity<>(request, headers);

        ResponseEntity<ChatResponse> response = restTemplate.exchange(
                API_URL,
                HttpMethod.POST,
                entity,
                ChatResponse.class
        );

        String aiResponse = response.getBody()
                .getChoices()
                .get(0)
                .getMessage()
                .getContent();

        ObjectMapper objectMapper = new ObjectMapper();

        System.out.println("========== AI RESPONSE ==========");
        System.out.println(aiResponse);
        System.out.println("=================================");

        return objectMapper.readValue(aiResponse, Map.class);
    }
}
