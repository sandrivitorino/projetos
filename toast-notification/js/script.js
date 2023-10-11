let toastbox = document.getElementById('toastbox');

function showToast(){
   let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = 'success';
    toastbox.appendChild(toast);
    
}