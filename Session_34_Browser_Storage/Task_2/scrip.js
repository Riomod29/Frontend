class Course {
    constructor(id, content, dueDate, status, assignedTo) {
        this.id = id;
        this.content = content;
        this.dueDate = dueDate;
        this.status = status;
        this.assignedTo = assignedTo;
    }
}

let courses = JSON.parse(localStorage.getItem("courses")) || [];
let editIndex = null; // Track the index of the course being edited

function updateCourses() {
    localStorage.setItem("courses", JSON.stringify(courses));
}

const courseData = document.querySelector("#course-data");
const errorMessage = document.querySelector("#error-message");

function renderCourses() {
    let data = "";
    courses.forEach((course, index) => {
        data += `
            <tr>
                <td>${index + 1}</td>
                <td>${course.content}</td>
                <td>${course.dueDate}</td>
                <td>${course.status}</td>
                <td>${course.assignedTo}</td>
                <td class="action-buttons">
                    <button class="edit" onclick="loadEditCourse(${index})">Sửa</button>
                    <button class="delete" onclick="deleteCourse(${index})">Xóa</button>
                </td>
            </tr>`;
    });
    courseData.innerHTML = data;
}

function validateInputs(content, dueDate, status, assignedTo) {
    if (!content.trim()) {
        return "Content is required.";
    }
    if (!dueDate) {
        return "Due date is required.";
    }
    if (!status) {
        return "Status is required.";
    }
    if (!assignedTo.trim()) {
        return "Assigned to is required.";
    }
    return "";
}

function clearForm() {
    document.querySelector("input[name='content']").value = "";
    document.querySelector("input[name='dueDate']").value = "";
    document.querySelector("select[name='status']").value = "";
    document.querySelector("input[name='assignedTo']").value = "";
    document.querySelector("button").innerText = "Submit";
    editIndex = null;
    errorMessage.textContent = "";
}

function addCourse(content, dueDate, status, assignedTo) {
    const id = courses.length > 0 ? Math.max(...courses.map(c => c.id)) + 1 : 1;
    const course = new Course(id, content, dueDate, status, assignedTo);
    courses.push(course);
}

function updateCourse(index, content, dueDate, status, assignedTo) {
    const course = new Course(courses[index].id, content, dueDate, status, assignedTo);
    courses[index] = course;
}

function handleSubmit() {
    const content = document.querySelector("input[name='content']").value;
    const dueDate = document.querySelector("input[name='dueDate']").value;
    const status = document.querySelector("select[name='status']").value;
    const assignedTo = document.querySelector("input[name='assignedTo']").value;

    const error = validateInputs(content, dueDate, status, assignedTo);
    if (error) {
        errorMessage.textContent = error;
        return;
    }

    if (editIndex === null) {
        // Add new course
        addCourse(content, dueDate, status, assignedTo);
    } else {
        // Update existing course
        updateCourse(editIndex, content, dueDate, status, assignedTo);
    }

    updateCourses();
    renderCourses();
    clearForm();
}

function deleteCourse(index) {
    courses.splice(index, 1);
    updateCourses();
    renderCourses();
}

function loadEditCourse(index) {
    const course = courses[index];
    document.querySelector("input[name='content']").value = course.content;
    document.querySelector("input[name='dueDate']").value = course.dueDate;
    document.querySelector("select[name='status']").value = course.status;
    document.querySelector("input[name='assignedTo']").value = course.assignedTo;
    document.querySelector("button").innerText = "Cập nhật";
    editIndex = index;
    errorMessage.textContent = "";
}

// Initial render
renderCourses();