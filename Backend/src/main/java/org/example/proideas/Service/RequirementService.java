package org.example.proideas.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.example.proideas.Entity.ProjectEntity;
import org.example.proideas.Entity.RequirementEntity;
import org.example.proideas.Model.ProjectResponse;
import org.example.proideas.Repository.RequirementRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class RequirementService {

    @Autowired
    private RequirementRepo requirementRepository;

    @Autowired
    private AIService aiService;

    @Autowired
    private ProjectService projectService;

    // Save Requirement
    public ProjectResponse saveRequirement(RequirementEntity requirement) throws Exception {

        // Save the user's requirement
        RequirementEntity savedRequirement = requirementRepository.save(requirement);

        // Generate AI project ideas
        Map<String, Object> generatedIdeas = aiService.generateProjectIdeas(savedRequirement);

        ObjectMapper objectMapper = new ObjectMapper();

        // Extract projects array
        @SuppressWarnings("unchecked")
        List<Map<String, Object>> projects =
                (List<Map<String, Object>>) generatedIdeas.get("projects");

        // Extract best recommended project
        @SuppressWarnings("unchecked")
        Map<String, Object> bestRecommendation =
                (Map<String, Object>) generatedIdeas.get("bestRecommendation");

        String recommendedProject =
                (String) bestRecommendation.get("projectName");

        // Save every generated project
        for (Map<String, Object> project : projects) {

            ProjectEntity projectEntity = new ProjectEntity();

            projectEntity.setRequirementId(savedRequirement.getId());

            projectEntity.setProjectName((String) project.get("projectName"));
            projectEntity.setObjective((String) project.get("objective"));
            projectEntity.setProblemStatement((String) project.get("problemStatement"));
            projectEntity.setDescription((String) project.get("description"));
            projectEntity.setDifficulty((String) project.get("difficulty"));
            projectEntity.setEstimatedDuration((String) project.get("estimatedDuration"));
            projectEntity.setFutureScope((String) project.get("futureScope"));
            projectEntity.setWhyChooseThisProject((String) project.get("whyChooseThisProject"));

            // Convert List/Object into JSON String
            projectEntity.setFeatures(
                    objectMapper.writeValueAsString(project.get("features"))
            );

            projectEntity.setTechnologyStack(
                    objectMapper.writeValueAsString(project.get("technologyStack"))
            );

            projectEntity.setModules(
                    objectMapper.writeValueAsString(project.get("modules"))
            );

            projectEntity.setIndustryApplications(
                    objectMapper.writeValueAsString(project.get("industryApplications"))
            );

            // Mark recommended project
            projectEntity.setRecommended(
                    projectEntity.getProjectName().equals(recommendedProject)
            );

            // Save project into database
            projectService.saveProject(projectEntity);
        }

        // Return response
        return new ProjectResponse(savedRequirement, generatedIdeas);
    }

    // Get All Requirements
    public List<RequirementEntity> getAllRequirements() {
        return requirementRepository.findAll();
    }

    // Get Requirement By Id
    public RequirementEntity getRequirementById(int id) {
        return requirementRepository.findById(id).orElse(null);
    }

    // Update Requirement
    public RequirementEntity updateRequirement(RequirementEntity requirement) {

        RequirementEntity exist =
                requirementRepository.findById(requirement.getId()).orElse(null);

        if (exist != null) {

            exist.setUserId(requirement.getUserId());
            exist.setDomain(requirement.getDomain());
            exist.setLanguage(requirement.getLanguage());
            exist.setDifficulty(requirement.getDifficulty());
            exist.setTeamSize(requirement.getTeamSize());
            exist.setDuration(requirement.getDuration());

            return requirementRepository.save(exist);
        }

        return null;
    }

    // Delete Requirement
    public String deleteRequirement(int id) {

        requirementRepository.deleteById(id);

        return "Requirement Deleted Successfully";
    }
}