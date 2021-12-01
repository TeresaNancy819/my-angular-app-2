import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  template: `
  <div class = "conatiner">
     <div class="one">
         <h1>Employee Interests Survey form</h1>
      </div>
      <div class="two">
        <p>enter your name</p>
        <input type="text">
      </div>
      <div class="three">
           <p>enter your Department</p>
           <input type="text">
       </div>
       <div class="four">
           <p>Tell Us Little About Yourself</p>
           <input type="text">
       </div>
       <div class="radio">
       <p>Do You Exercise at Home</p>
       <input type="radio" name="yes" value="YES"> <br>
       <label for="yes">Yes</label><br>
       <input type="radio" name="no" value="NO"> <br>
       <label for="no">NO</label><br>
        </div>
       <div class="favThings">
       <p>How Do You Like To Read About Your Favorite Topic?</p>
       <input type="checkbox" id="fav" name="type1" value="books">
       <label for="type1"> Books</label><br>
       <input type="checkbox" id="fav" name="type2" value="online">
       <label for="type2">Onile Resourses</label><br>
       <input type="checkbox" id="fav" name="type3" value="phone">
       <label for="type3"> Phone Apps</label><br>
       <input type="checkbox" id="fav" name="type4" value="magzines">
       <label for="type4"> Magzines</label><br>
       </div>
       <div class=" movies">
       <form action="#">
            <label for="movie">what genere of movie do u like?</label>
             <select name="movies" id="movies">
                <option value="comedy">Comedy</option>
                 <option value="romantic">romantic</option>
                 <option value="thriller">Thriller</option>
                  <option value="horror">Horror</option>
             </select>
              <br><br>
              <input type="submit" value="Submit">
        </form>

      </div>
   </div>

  `,
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 name="rupesh"
}
