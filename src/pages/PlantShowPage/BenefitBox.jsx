import clsx from "clsx";

const BenefitBox = (props) => {
    const {icon, title, description} = props;
    return <div className="flex flex-col items-center px-2 py-4 flex-1">
        <i className={clsx("text-emerald-700 text-3xl", icon )}></i>
        <div className="my-1 text-slate-700">{title}</div>
        <div className="text-slate-500 text-sm text-center">{description}</div>
    </div>
}

export default BenefitBox;