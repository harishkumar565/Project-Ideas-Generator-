package org.example.proideas.Entity;

import jakarta.persistence.*;

@Entity
public class ProjectEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int requirementId;

    private String projectName;

    private String objective;

    private String problemStatement;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String description;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String features;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String technologyStack;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String modules;

    private String difficulty;

    private String estimatedDuration;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String futureScope;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String whyChooseThisProject;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String industryApplications;

    private boolean recommended;

    // Default Constructor
    public ProjectEntity() {
    }

    // Getters and Setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getRequirementId() {
        return requirementId;
    }

    public void setRequirementId(int requirementId) {
        this.requirementId = requirementId;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getObjective() {
        return objective;
    }

    public void setObjective(String objective) {
        this.objective = objective;
    }

    public String getProblemStatement() {
        return problemStatement;
    }

    public void setProblemStatement(String problemStatement) {
        this.problemStatement = problemStatement;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getFeatures() {
        return features;
    }

    public void setFeatures(String features) {
        this.features = features;
    }

    public String getTechnologyStack() {
        return technologyStack;
    }

    public void setTechnologyStack(String technologyStack) {
        this.technologyStack = technologyStack;
    }

    public String getModules() {
        return modules;
    }

    public void setModules(String modules) {
        this.modules = modules;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }

    public String getEstimatedDuration() {
        return estimatedDuration;
    }

    public void setEstimatedDuration(String estimatedDuration) {
        this.estimatedDuration = estimatedDuration;
    }

    public String getFutureScope() {
        return futureScope;
    }

    public void setFutureScope(String futureScope) {
        this.futureScope = futureScope;
    }

    public String getWhyChooseThisProject() {
        return whyChooseThisProject;
    }

    public void setWhyChooseThisProject(String whyChooseThisProject) {
        this.whyChooseThisProject = whyChooseThisProject;
    }

    public String getIndustryApplications() {
        return industryApplications;
    }

    public void setIndustryApplications(String industryApplications) {
        this.industryApplications = industryApplications;
    }

    public boolean isRecommended() {
        return recommended;
    }

    public void setRecommended(boolean recommended) {
        this.recommended = recommended;
    }
}