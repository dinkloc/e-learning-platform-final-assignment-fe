import Instance from "./instance"

const getAllCourse = async () => {
    return await Instance.get('/courses');

}

const CourseService = {
    getAllCourse
}

export default CourseService