var providerGoogle = new firebase.auth.GoogleAuthProvider();
var providerFacebook = new firebase.auth.FacebookAuthProvider();

$('#loginGoogle').click(function(){
    firebase.auth().signInWithPopup(providerGoogle)
    .then(function(result){
        console.log(result.user);
        $('#loginGoogle').hide();
        //guardarDatos(result.user);
        $('#root').append(result.user.displayName);
        $('#avatar').attr('src',result.user.photoURL)
    });
});

$('#loginFacebook').click(function(){
    firebase.auth().signInWithPopup(providerFacebook)
    .then(function(result){
        console.log(result.user);
        $('#logiFacebook').hide();
        //guardarDatos(result.user);
        $('#root').append(result.user.displayName);
        $('#avatar').attr('src',result.user.photoURL)
    });
});

function guardarDatos(user){
    var usuario= {
        uid      :user.uid,
        nombre   :user.displayName,
        email    :user.email,
        foto     :user.photoURL
    }
    firebase.database().ref("taller05/Usuarios/"+user.uid).set(usuario)
}