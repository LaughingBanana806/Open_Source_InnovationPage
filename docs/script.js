document.addEventListener('DOMContentLoaded', function() {
    const addProjectIcon = document.getElementById('add-project-icon');
    const addProjectContent = document.getElementById('add-project-content');
    const projectForm = document.getElementById('project-form');
    const submitButton = projectForm.querySelector('button');
    // addProjectIcon.addEventListener('click', function() {
    //     addProjectIcon.style.display = 'none'; // Hide the icon
    //     addProjectContent.style.display = 'block'; // Show the form
    // });
});

function listViewToggle(listType,button){
    const list=document.getElementById(listType)
    if(list.classList.contains("listExpanded")){
        list.classList.remove("listExpanded")
        list.classList.add("listShortened")

        button.innerText="View More";

    }
    else {
        list.classList.add("listExpanded")
        list.classList.remove("listShortened")
        button.innerText="View Less";

    }
}