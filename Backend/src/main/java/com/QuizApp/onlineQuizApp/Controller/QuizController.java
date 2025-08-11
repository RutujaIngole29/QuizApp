package com.QuizApp.onlineQuizApp.Controller;

//import com.QuizApp.onlineQuizApp.Model.QuizQuestion;
//import com.QuizApp.onlineQuizApp.Repository.QuizRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//import java.util.Map;
//
//@RestController
//@RequestMapping("/api/quiz")
//@CrossOrigin(origins = "*")
//public class QuizController {
//
//    @Autowired
//    private QuizRepository quizRepository;
//
//    @PostMapping
//    public QuizQuestion addQuestion(@RequestBody QuizQuestion question) {
//        return quizRepository.save(question);
//    }
//
//    @GetMapping
//    public List<QuizQuestion> getAllQuestions() {
//        return quizRepository.findAll();
//    }
//
//    // ✅ Delete quiz by ID
//    @DeleteMapping("/{id}")
//    public String deleteQuestionById(@PathVariable Long id) {
//        if (quizRepository.existsById(id)) {
//            quizRepository.deleteById(id);
//            return "Quiz question with ID " + id + " deleted successfully!";
//        } else {
//            return "Quiz question with ID " + id + " not found!";
//        }
//    }
//
//    @PostMapping("/check")
//    public String checkAnswer (@RequestBody Map<String,String> payload){
//        Long questionId=Long.parseLong(payload.get("questionId"));
//        String selectedAnswer= payload.get("answer");
//        QuizQuestion question=quizRepository.findById(questionId)
//                .orElse(null);
//
//        if(question==null){
//            return "Question not found";
//        }
//
//        if (question.getCorrectAnswer().equalsIgnoreCase(selectedAnswer)){
//            return "Correct";
//        }else{
//            return "Wrong! correct answer is: "+question.getCorrectAnswer();
//        }
//    }
//}


import com.QuizApp.onlineQuizApp.Model.QuizQuestion;
import com.QuizApp.onlineQuizApp.Repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/quiz")
@CrossOrigin("*")
public class QuizController {

    @Autowired
    private QuizRepository quizRepository;

    @PostMapping
    public QuizQuestion addQuestion(@RequestBody QuizQuestion question) {
        return quizRepository.save(question);
    }

    @GetMapping
    public List<QuizQuestion> getAllQuestions() {
        return quizRepository.findAll();
    }

    @PostMapping("/check")
    public String checkAnswer(@RequestBody Map<String, String> payload) {
        try {
            // Validate inputs
            if (!payload.containsKey("questionId") || !payload.containsKey("answer")) {
                return "Invalid request: Missing parameters";
            }

            Long questionId = Long.parseLong(payload.get("questionId"));
            String selectedAnswer = payload.get("answer");

            Optional<QuizQuestion> optionalQuestion = quizRepository.findById(questionId);
            if (optionalQuestion.isEmpty()) {
                return "Question not found!";
            }

            QuizQuestion question = optionalQuestion.get();
            if (question.getCorrectAnswer().equalsIgnoreCase(selectedAnswer)) {
                return "Correct!";
            } else {
                return "Wrong! Correct answer is: " + question.getCorrectAnswer();
            }
        } catch (NumberFormatException e) {
            return "Invalid questionId format!";
        } catch (Exception e) {
            return "Invalid request: " + e.getMessage();
        }
    }

    @GetMapping("/category/{category}")
    public List<QuizQuestion> getQuestionsByCategory(@PathVariable String category) {
        return quizRepository.findByCategory(category);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteQuestion(@PathVariable Long id) {
        if (!quizRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        quizRepository.deleteById(id);
        return ResponseEntity.ok("Question deleted successfully");
    }
    @GetMapping("/category/{category}/difficulty/{difficulty}") // NEW
    public List<QuizQuestion> getQuestionsByCategoryAndDifficulty(
            @PathVariable String category,
            @PathVariable String difficulty) {
        return quizRepository.findByCategoryAndDifficulty(category, difficulty);
    }

}
