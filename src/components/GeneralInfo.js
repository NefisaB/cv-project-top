export default function GeneralInfo(props) {

    const { generalInfo, onHandleChange, onSubmit } = props

    
    return (
        <section className="general-info">
            <form>
                <legend>General Info</legend>
                <fieldset>
                    <label htmlFor="name">Your name:</label>
                    <input
                        id="name"
                            type="text"
                            value={generalInfo.name}
                            name="name"
                            onChange={onHandleChange}
                            placeholder="Xiao Po"
                        />
                    
                </fieldset>
                 <fieldset>
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                            value={generalInfo.email}
                            name="email"
                            onChange={onHandleChange}
                            placeholder="dragon-warrior@fantastic5.com"/>
                </fieldset>
                 <fieldset>
                    <label htmlFor="phone">Phone:</label>
                    <input
                        id="phone"
                        type="phone"
                            value={generalInfo.phone}
                            name="phone"
                            onChange={onHandleChange}
                            placeholder="+43 111 1111 111"/>
                </fieldset>
                 <button onClick={onSubmit}>Submit</button>
            </form>
        </section>
    )
    
}