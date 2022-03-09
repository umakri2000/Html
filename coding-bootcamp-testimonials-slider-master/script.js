let i = 0;
let clickRight = document.getElementById("right-button");
clickRight.addEventListener("click", slideRight);

let clickLeft = document.getElementById("left-button");
clickLeft.addEventListener("click", slideLeft);

function slideRight() {
    var testimonial = document.querySelectorAll(".testimonial-infos");
    var image = document.querySelectorAll(".client-picture");

    if (i == (testimonial.length - 1)) {
        testimonial[i].classList.remove('leftOut')
        testimonial[i].classList.remove('leftIn')
        image[i].classList.remove('rightOut');
        image[i].classList.remove('rightIn');

        if (testimonial[i].classList.contains("rightIn")) {
            testimonial[i].classList.replace("rightIn", "rightOut");
            image[i].classList.replace("leftIn", "leftOut");
            i = 0;
            testimonial[i].classList.remove('leftOut')
            testimonial[i].classList.remove('leftIn')
            image[i].classList.remove('rightOut');
            image[i].classList.remove('rightIn');

            if (testimonial[i].classList.contains("rightOut")) {
                testimonial[i].classList.replace("rightOut", "rightIn");
                image[i].classList.replace("leftOut", "leftIn");
            }
            else {
                testimonial[i].classList.add('rightIn');
                image[i].classList.add("leftIn");
            }
        }
        else {
            testimonial[i].classList.add('rightOut');
            image[i].classList.add("leftOut");
            i = 0;
            testimonial[i].classList.remove('leftOut')
            testimonial[i].classList.remove('leftIn')
            image[i].classList.remove('rightOut');
            image[i].classList.remove('rightIn');

            if (testimonial[i].classList.contains("rightOut")) {
                testimonial[i].classList.replace("rightOut", "rightIn");
                image[i].classList.replace("leftOut", "leftIn");
            }
            else {
                testimonial[i].classList.add('rightIn');
                image[i].classList.add("leftIn");
            }
        }
    }
    else {
        testimonial[i].classList.remove('leftOut')
        testimonial[i].classList.remove('leftIn')
        image[i].classList.remove('rightOut');
        image[i].classList.remove('rightIn');

        if (testimonial[i].classList.contains("rightIn")) {
            testimonial[i].classList.replace("rightIn", "rightOut");
            image[i].classList.replace("leftIn", "leftOut");
            i++;
            testimonial[i].classList.remove('leftOut')
            testimonial[i].classList.remove('leftIn')
            image[i].classList.remove('rightOut');
            image[i].classList.remove('rightIn');

            if (testimonial[i].classList.contains("rightOut")) {
                testimonial[i].classList.replace("rightOut", "rightIn");
                image[i].classList.replace("leftOut", "leftIn");
            }
            else {
                testimonial[i].classList.add('rightIn');
                image[i].classList.add("leftIn");
            }
        }
        else {
            testimonial[i].classList.add('rightOut');
            image[i].classList.add("leftOut");
            i++;
            testimonial[i].classList.remove('leftOut')
            testimonial[i].classList.remove('leftIn')
            image[i].classList.remove('rightOut');
            image[i].classList.remove('rightIn');

            if (testimonial[i].classList.contains("rightOut")) {
                testimonial[i].classList.replace("rightOut", "rightIn");
                image[i].classList.replace("leftOut", "leftIn");
            }
            else {
                testimonial[i].classList.add('rightIn');
                image[i].classList.add("leftIn");
            }
        }
    }
}

function slideLeft() {
    var testimonial = document.querySelectorAll(".testimonial-infos");
    var image = document.querySelectorAll(".client-picture");

    if (i == (testimonial.length - 1)) {
        testimonial[i].classList.remove('rightOut')
        testimonial[i].classList.remove('rightIn')
        image[i].classList.remove('leftOut');
        image[i].classList.remove('leftIn');

        if (testimonial[i].classList.contains("leftIn")) {
            testimonial[i].classList.replace("leftIn", "leftOut");
            image[i].classList.replace("rightIn", "rightOut");
            i = 0;
            image[i].classList.remove('leftOut');
            image[i].classList.remove('leftIn');

            if (testimonial[i].classList.contains("leftOut")) {
                testimonial[i].classList.replace("leftOut", "leftIn");
                image[i].classList.replace("rightOut", "rightIn");
            }
            else {
                testimonial[i].classList.add('leftIn');
                image[i].classList.add("rightIn");
            }
        }
        else {
            testimonial[i].classList.add('leftOut');
            image[i].classList.add("rightOut");
            i = 0;
            image[i].classList.remove('leftOut');
            image[i].classList.remove('leftIn');

            if (testimonial[i].classList.contains("leftOut")) {
                testimonial[i].classList.replace("leftOut", "leftIn");
                image[i].classList.replace("rightOut", "rightIn");
            }
            else {
                testimonial[i].classList.add('leftIn');
                image[i].classList.add("rightIn");
            }
        }
    }
    else {
        testimonial[i].classList.remove('rightOut')
        testimonial[i].classList.remove('rightIn')
        image[i].classList.remove('leftOut');
        image[i].classList.remove('leftIn');

        if (testimonial[i].classList.contains("leftIn")) {
            testimonial[i].classList.replace("leftIn", "leftOut");
            image[i].classList.replace("rightIn", "rightOut");
            i++;
            image[i].classList.remove('leftOut');
            image[i].classList.remove('leftIn');

            if (testimonial[i].classList.contains("leftOut")) {
                testimonial[i].classList.replace("leftOut", "leftIn");
                image[i].classList.replace("rightOut", "rightIn");
            }
            else {
                testimonial[i].classList.add('leftIn');
                image[i].classList.add("rightIn");
            }
        }
        else {
            testimonial[i].classList.add('leftOut');
            image[i].classList.add("rightOut");
            i++;
            image[i].classList.remove('leftOut');
            image[i].classList.remove('leftIn');

            if (testimonial[i].classList.contains("leftOut")) {
                testimonial[i].classList.replace("leftOut", "leftIn");
                image[i].classList.replace("rightOut", "rightIn");
            }
            else {
                testimonial[i].classList.add('leftIn');
                image[i].classList.add("rightIn");
            }
        }
    }
}