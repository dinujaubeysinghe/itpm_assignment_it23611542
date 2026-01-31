## itpm_assignment_it23611542

#_Requirement  
Node.js  
Git  
VS code  

#_Installing Dependencies  
npm install     //install node  
npx playwright install      //install playwright  

#_Running the Tests  
npx playwright test     //run all test cases  
npx playwright test tests/pos_fun.spec.ts       //run only positive functional tests  
npx playwright test tests/neg_fun.spec.ts       //run only negative functional tests  
npx playwright test tests/pos_ui.spec.ts        //run only positive UI tests  
npx playwright test tests/neg_ui.spec.ts        //run only negative UI tests  

#_Viewing the Test Report  
npx playwright show-report      









