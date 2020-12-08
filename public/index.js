const text_effect = () => {
  const animation = document.getElementById("titleAnimation").innerHTML;
  const first_letter = animation.charAt(0);
  const second_letter = animation.charAt(1);
  const third_letter = animation.charAt(3);
  console.log(first_letter, second_letter, third_letter);
};

text_effect();
