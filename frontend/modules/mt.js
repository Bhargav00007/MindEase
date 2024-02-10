export function mt() {
    const mtDiv = document.createElement('div')
    mtDiv.innerHTML = `<div class="allquiz">
    <div class="quiz">
       
           <label>how would you rate your mood right now?</label> <br><hr>
           
           <label class="containerMT">Very Sad<input type="radio" name="option">
           <span class="checkmark"></span></label>
           <hr>
           <label class="containerMT">Sad<input type="radio" name="option">
           <span class="checkmark"></span></label>
           <hr>
           <label class="containerMT">Neutral<input type="radio" name="option">
           <span class="checkmark"></span></label>
           <hr>
           <label class="containerMT">Happy<input type="radio" name="option">
           <span class="checkmark"></span></label>
           <hr> 

           </div>

           <div class="quiz">

           <label>Which of the following emotions have you experienced today?</label> <br><hr>
           
           <label class="containerMT">Happines<input type="radio" name="option1">
           <span class="checkmark"></span></label>
           <hr>
           <label class="containerMT">Sad<input type="radio" name="option1">
           <span class="checkmark"></span></label>
           <hr>
           <label class="containerMT">Anger<input type="radio" name="option1">
           <span class="checkmark"></span></label>
           <hr>
           <label class="containerMT">Excitement<input type="radio" name="option1">
           <span class="checkmark"></span></label>
           <hr> 

           </div>

           <div class="quiz">
               
           <label>Are you feeling more or less motivated than usual today?
           </label> <br><hr>
           
           <label class="containerMT">More motivated<input type="radio" name="option3">
           <span class="checkmark"></span></label>
           <hr>
           <label class="containerMT">Less motivated<input type="radio" name="option3">
           <span class="checkmark"></span></label>
           <hr>
           <label class="containerMT">Neutral<input type="radio" name="option3">
           <span class="checkmark"></span></label>
           <hr>
           <label class="containerMT">About the same<input type="radio" name="option3">
           <span class="checkmark"></span></label>
           <hr> 
            </div>
            <div class="quiz">
               
               <label>When faced with challenges today, how did you generally react?

               </label> <br><hr>
               
               <label class="containerMT">Calm and focused<input type="radio" name="option4">
               <span class="checkmark"></span></label>
               <hr>
               <label class="containerMT">Overwhelmed<input type="radio" name="option4">
               <span class="checkmark"></span></label>
               <hr>
               <label class="containerMT">Neutral<input type="radio" name="option4">
               <span class="checkmark"></span></label>
               <hr>
               <label class="containerMT">Frustated and stressfull<input type="radio" name="option4">
               <span class="checkmark"></span></label>
               <hr> 
                </div>
                <div class="quiz">
               
                   <label>   How has your sleep quality been recently?
                   </label> <br><hr>
                   
                   <label class="containerMT">Great<input type="radio" name="option5">
                   <span class="checkmark"></span></label>
                   <hr>
                   <label class="containerMT">good<input type="radio" name="option5">
                   <span class="checkmark"></span></label>
                   <hr>
                   <label class="containerMT">Neutral<input type="radio" name="option5">
                   <span class="checkmark"></span></label>
                   <hr>
                   <label class="containerMT">Poor<input type="radio" name="option5">
                   <span class="checkmark"></span></label>
                   <hr> 
                    </div>

                    <button>Submit</button>
           <div class="answer"></div> 
   </div>`
    container.appendchild(mtDiv)
}