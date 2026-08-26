import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

export default function UserForm() {

    const {register, setValue } = useForm({
        defaultValues: {
            userName: "",
            address: "",
            campus: "",
            program: "",
            active: false
        }
    });

useEffect(() => {
    let data = {
        userName: "Dexter Jackson",
        address: "123 Yonge St, Toronto ON",
        campus: "Pluto",
        program: ['Classfied', 'Top-Secret'],
        parking: "Monthly",
        active: true
    }

    for (const prop in data) {
        setValue(prop, data[prop]);
    }
}, [])

function submitForm(data) {
    console.log(data);
}

return (
    <form onSubmit={handleSubmit(submitForm)}>
        User Name: <br />
        <input {...register("userName")}  /><br/><br/>

        Address: <br />
        <textarea {...register("address")}></textarea><br/><br/>

        Campus: <br />
        <select {...register("campus")}>
            <option value="Jupiter">Jupiter</option>
            <option value="Pluto">Pluto</option>
            <option value="Nyanga">Nyanga</option>
            <option value="Kripton">Kripton</option>
        </select><br/><br/>

        Program: <br />
        <select multiple {...register("program")}>
            <option value="TS">Top Secret</option>
            <option value="CM">Critical Minerals</option>
            <option value="AI">Artificial Inteligence</option>
            <option value="MS">Material Science</option>
        </select><br/><br />

        Parking: <br />
        <input type="radio" value="daily" {...register("parking")} /> Daily<br/>
        <input type="radio" value="monthly" {...register("parking")} /> Monthly<br/>
        <input type="radio" value="year" {...register("parking")} /> Year<br/>

        <input type="checkbox" {...register("active")} />Currently Active<br/><br/>        
        
        <button type="submit">Update User</button>
    </form>
)
}