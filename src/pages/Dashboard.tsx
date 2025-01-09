import { useTranslation } from "react-i18next";

function Dashboard() {
  
  const { t } = useTranslation()


  return (
    <div className="text-red-600 font-bold">{t("login")}</div>
  )
}

export default Dashboard