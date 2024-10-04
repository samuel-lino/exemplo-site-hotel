$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000');

    $('#formulario').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            },
        },
        messages:{
            nome:{
                required: "Por favor digite seu nome"
            },
            email:{
                required: "Digite um E-mail valido"
            },
            mensagem:{
                required: "Digite a sua mensagem"
            }
        },
        submitHandler: function (form) {
            alert("mensagem enviada!");
            form.reset();
        },
        invalidHandler: function (form, validator) {
            alert("Por favor, preencha os campos para enviar a mensagem!");
        }
    })
});