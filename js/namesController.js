angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.names = [
        {name:'Homer',
        age:'40',
        description: "Homer and his wife Marge have three children: Bart, Lisa, and Maggie. As the family's provider, he works at the Springfield Nuclear Power Plant. Homer embodies several American working class stereotypes: he is crude, bald, overweight, incompetent, clumsy, lazy, a heavy drinker, and ignorant; however, he is essentially a decent man and fiercely devoted to his family. Despite the suburban blue-collar routine of his life, he has had a number of remarkable experiences."
    },
        {name:'Bart',
        age:'10',
        description: "At ten years old, Bart is the eldest child and only son of Homer and Marge, and the brother of Lisa and Maggie. Bart's most prominent character traits are his mischievousness, rebelliousness and disrespect for authority."
    },
        {name:'Lisa',
        age:'8',
        description: "At eight years old, Lisa is the second child of Homer and Marge, younger sister of Bart and older sister of Maggie. She is highly intelligent and plays the baritone saxophone."
    }
    ];
});