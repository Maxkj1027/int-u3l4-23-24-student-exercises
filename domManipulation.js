// html button elements
let contentButton = document.querySelector('.content-button');
let image1Button = document.querySelector('.image-1-button');
let image2Button = document.querySelector('.image-2-button');

// html content elements
let myName = document.querySelector('.name');
let myHobby = document.querySelector('.hobby');
let myLocation = document.querySelector('.location');
let image = document.querySelector('.image');


// CODE ALONG
// 1. An event listener is provided for the `contentButton`
// 2. When clicked, it should change the content of:
//   - The `name` header.

// -- RETURN TO LESSON --

// CODE SOLO
//   - The `hobby` paragraph.
//   - The `location` paragraph.

contentButton.addEventListener('click', function() {
  myName.innerHTML = ("Kirk James");
myHobby.innerHTML = ("play video games");
myLocation.innerHTML = ("Phillipines");




});

// 3. Add an event listener to the `image1Button`
// 4. When clicked, it should change the source of `image` to another image URL.
 image1Button.addEventListener('click',function() {
  image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUpFTFg8QBA0acJ79LarO8HVo5gLx7O8tQPg&usqp=CAU"
 });
    



// 5. Add an event listener to the `image2Button`
// 6. When clicked, it should change the source of `image` to another image URL.
image2Button.addEventListener('click',function() {
 image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQvhdFNmie0Q8aQeXMExyV4Rotyw1H5_wt8w&usqp=CAU"
});

// BONUS
// 7. Try using different event types for your buttons.
  