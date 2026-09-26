package org.example.proideas.Repository;

import org.example.proideas.Entity.ProjectEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectRepo extends JpaRepository<ProjectEntity, Integer> {

    List<ProjectEntity> findByRequirementId(int requirementId);

    ProjectEntity findByRequirementIdAndRecommendedTrue(int requirementId);

}