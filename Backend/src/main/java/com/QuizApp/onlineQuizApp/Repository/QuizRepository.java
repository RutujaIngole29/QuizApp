package com.QuizApp.onlineQuizApp.Repository;

import com.QuizApp.onlineQuizApp.Model.QuizQuestion;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;


public interface QuizRepository extends JpaRepository<QuizQuestion, Long> {
    List<QuizQuestion> findByCategory(String category);
    List<QuizQuestion> findByCategoryAndDifficulty(String category, String difficulty); // NEW
}
