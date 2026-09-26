package org.example.proideas.Model;

import org.example.proideas.Entity.RequirementEntity;

import java.util.Map;

public class ProjectResponse {

    private RequirementEntity requirement;
    private Map<String, Object> generatedIdeas;

    public ProjectResponse() {
    }

    public ProjectResponse(RequirementEntity requirement, Map<String, Object> generatedIdeas) {
        this.requirement = requirement;
        this.generatedIdeas = generatedIdeas;
    }

    public RequirementEntity getRequirement() {
        return requirement;
    }

    public void setRequirement(RequirementEntity requirement) {
        this.requirement = requirement;
    }

    public Map<String, Object> getGeneratedIdeas() {
        return generatedIdeas;
    }

    public void setGeneratedIdeas(Map<String, Object> generatedIdeas) {
        this.generatedIdeas = generatedIdeas;
    }
}