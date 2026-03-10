import "./Template.css";

const Template = () => {
    return (
        <div class="background">
            <div class="destello-1"></div>
            <div class="destello-2"></div>
            {/* <div class="stars"></div> */}

            <div class="center-purple absolute-center">
                <div class="rayitos absolute-center">
                    <div class="rayo-h"></div>
                    <div class="resplandor-h"></div>

                    <div class="rayo-v"></div>
                    <div class="resplandor-v"></div>
                </div>

                <div class="nucleos absolute-center">
                    <div class="nucleo-4"></div>
                    <div class="nucleo-3"></div>
                    <div class="nucleo-2"></div>
                    <div class="nucleo-1"></div>
                </div>
            </div>

            <div class="resplandores">
                <div class="artifact orb-large-1"></div>
                <div class="artifact orb-large-2"></div>
                <div class="artifact orb-large-3"></div>
                <div class="artifact orb-medium-1"></div>
                <div class="artifact orb-medium-2"></div>
            </div>
            <div class="resplandores-mini">
                <div class="artifact dot d1"></div>
                <div class="artifact dot d2"></div>
                <div class="artifact dot d3"></div>
                <div class="artifact dot-tiny d4"></div>
                <div class="artifact dot d5"></div>
                <div class="artifact dot d6"></div>
                <div class="artifact dot-tiny d7"></div>
                <div class="artifact dot d8"></div>
                <div class="artifact dot-tiny d9"></div>
            </div>
        </div>
    );
};

export default Template;
