let keyone = document.querySelector(".white_key1");
let keytwo = document.querySelector(".white_key2");
let keythree = document.querySelector(".white_key3");
let keyfour = document.querySelector(".white_key4");
let keyfive = document.querySelector(".white_key5");
let keysix = document.querySelector(".white_key6");
let keyseven = document.querySelector(".white_key7");

let BlackkeyOne= document.querySelector(".black_key1");
let BlackkeyTwo = document.querySelector(".black_key2");
let BlackkeyFour = document.querySelector(".black_key4");
let BlackkeyFive = document.querySelector(".black_key5");
let BlackkeySix = document.querySelector(".black_key6");
/*
let noteone = new Audio('notes/key11.ogg');
let notetwo = new Audio('notes/key12.ogg');
let notethree = new Audio('notes/key13.ogg');
let notefour = new Audio('notes/key14.ogg');
let notefive = new Audio('notes/key15.ogg');
let notesix = new Audio('notes/key16.ogg');
let noteseven = new Audio('notes/key17.ogg');
*/

var sound = {
	noteone: new Howl({
      src: ['notes/key11.ogg']
    }),
    notetwo: new Howl({
      src: ['notes/key12.ogg']
    }),
    notethree: new Howl({
      src: ['notes/key13.ogg']
    }),
    notefour: new Howl({
      src: ['notes/key14.ogg']
    }),
    notefive: new Howl({
      src: ['notes/key15.ogg']
    }),
    notesix: new Howl({
      src: ['notes/key16.ogg']
    }),
    noteseven: new Howl({
      src: ['notes/key17.ogg']
    })
}

var blackKeysSounds = {
	blackKeySoundOne: new Howl({
		src:['notes/key18.ogg']
	}),
	blackKeySoundTwo: new Howl({
		src:['notes/key19.ogg']
	}),
	blackKeySoundThree: new Howl({
		src:['notes/key20.ogg']
	}),
	blackKeySoundFour: new Howl({
		src:['notes/key21.ogg']
	}),
	blackKeySoundFive: new Howl({
		src:['notes/key22.ogg']
	}),
}

keyone.addEventListener("click", () => {
	sound.noteone.play();
})

keytwo.addEventListener("click", () => {
	sound.notetwo.play();
})

keythree.addEventListener("click", () => {
	sound.notethree.play();
})

keyfour.addEventListener("click", () => {
	sound.notefour.play();
})

keyfive.addEventListener("click", () => {
	sound.notefive.play();
})

keysix.addEventListener("click", () => {
	sound.notesix.play();
})

keyseven.addEventListener("click", () => {
	sound.noteseven.play();
})

// black keys sounds...

BlackkeyOne.addEventListener('click', () => {
   blackKeysSounds.blackKeySoundOne.play();
})
BlackkeyTwo.addEventListener('click', () => {
   blackKeysSounds.blackKeySoundTwo.play();
})
BlackkeyFour.addEventListener('click', () => {
   blackKeysSounds.blackKeySoundThree.play();
})
BlackkeyFive.addEventListener('click', () => {
   blackKeysSounds.blackKeySoundFour.play();
})
BlackkeySix.addEventListener('click', () => {
   blackKeysSounds.blackKeySoundFive.play();
})