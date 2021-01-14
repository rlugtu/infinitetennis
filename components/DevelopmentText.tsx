import styles from '../components/modulecss/Programs.module.css'
import programsText from './assets/programs.json'
import Image from "next/image"

const DevelopmentText = (props) => {
    return(
        <div>
            <div className={styles.trainingDescriptionContainer}>
                    <p>{props.description}</p>
                    <div className={styles.closeDescription}
                    onClick={() =>props.setActivateDescription(false)}>
                        <Image src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTI1NiwwQzExNC44MzMsMCwwLDExNC44MzMsMCwyNTZzMTE0LjgzMywyNTYsMjU2LDI1NnMyNTYtMTE0Ljg1MywyNTYtMjU2UzM5Ny4xNjcsMCwyNTYsMHogTTI1Niw0NzIuMzQxICAgIGMtMTE5LjI3NSwwLTIxNi4zNDEtOTcuMDQ2LTIxNi4zNDEtMjE2LjM0MVMxMzYuNzI1LDM5LjY1OSwyNTYsMzkuNjU5YzExOS4yOTUsMCwyMTYuMzQxLDk3LjA0NiwyMTYuMzQxLDIxNi4zNDEgICAgUzM3NS4yNzUsNDcyLjM0MSwyNTYsNDcyLjM0MXoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTM2OS4yMjcsMjgzLjM2NWwtOTkuMTQ4LTk5LjE0OGMtNy43MzQtNy42OTQtMjAuMjI2LTcuNjk0LTI3Ljk2LDBsLTk5LjE0OCw5OS4xNDhjLTYuMzY1LDcuNDE2LTYuMzY1LDE4LjM4MiwwLDI1Ljc5OCAgICBjNy4xMTksOC4zMDksMTkuNjUxLDkuMjgsMjcuOTYsMi4xNjFMMjU2LDIyNi4yNTZsODUuMjY3LDg1LjA2OWM3LjczNCw3LjY5NCwyMC4yMjYsNy42OTQsMjcuOTYsMCAgICBDMzc2LjkyMSwzMDMuNTkxLDM3Ni45MjEsMjkxLjA5OCwzNjkuMjI3LDI4My4zNjV6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==" 
                          layout="fill"
                          objectFit="cover" 
                        />
                    </div>
            </div>
        </div>
    )
}

export default DevelopmentText