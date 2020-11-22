package com.opportunity.hack.vidyodaya;

public final class Utility {

  private Utility() {}

  /**
   * Return provider if it has been set, otherwise return receiver
   *
   * @param receiver The current value that may receive a new value
   * @param provider The new value that may or may not be set
   * @return
   */
  public static Object optionallyReplace(Object receiver, Object provider) {
    if (provider == null) return receiver; else return provider;
  }

  /**
   * Return provider if it has been set, otherwise return receiver
   *
   * @param receiver The current value that may receive a new value
   * @param provider The new value that may or may not be set
   * @return
   */
  public static long optionallyReplace(long receiver, long provider) {
    if (provider == 0) return receiver; else return provider;
  }

  /**
   * Return provider if it has been set, otherwise return receiver
   *
   * @param receiver The current value that may receive a new value
   * @param provider The new value that may or may not be set
   * @return
   */
  public static double optionallyReplace(double receiver, double provider) {
    if (provider == 0.0d) return receiver; else return provider;
  }
}
