class DosesController < ApplicationController

  def create
    @cocktail = Cocktail.find(params[:cocktail_id])

    @dose = Dose.new(params_dose)
    @dose.cocktail = @cocktail
    if @dose.save
      redirect_to cocktail_path(@cocktail)
    else
      # @review = Review.new
      render "cocktails/show"
    end
  end

  def update

  end

  def destroy
    @dose = Dose.find(params[:id])
    @dose.destroy
    redirect_to cocktail_path(@dose.cocktail)
  end

  private

  def params_dose
    params.require(:dose).permit(:ingredient_id, :quantity)
  end
end
