const icons = document.querySelectorAll(".user-details")
const sortableList = document.querySelector(".sortable-list")

icons.forEach((word) => {
    word.addEventListener("dragstart", () => {
        setTimeout(() => word.classList.add("dragging"), 0)
    })
    word.addEventListener("dragend", () => {
        word.classList.remove("dragging")
    })
})
const initsortableList = (e) => {
    const dragingItem = sortableList.querySelector(".dragging")
    const lists = [...sortableList.querySelectorAll(".user-details:not(.dragging)")]

    const nextSilbling = lists.find((list) => e.clientY <= list.offsetTop + list.offsetHeight / 2)
    sortableList.insertBefore(dragingItem, nextSilbling)
}
document.addEventListener("dragover", initsortableList)
console.log("hello")






